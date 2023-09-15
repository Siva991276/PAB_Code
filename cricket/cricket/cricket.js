const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");

const { open } = require("sqlite");
const port = 3010;

let db = null;

// connection

const dbpath = path.join(__dirname, "cricket.db");

const app = express();

app.use(express.json());

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbpath,
            driver: sqlite3.Database
        });


        app.listen(port, () => {
            console.log(` DB connected \n server running at ${port}`);
        });

    }
    catch (error) {
        console.log(error.message);
        process.exit(1)
    }
};
initializeDBAndServer();

// send request

app.get("/", (req, res) => {

    res.send("its working");
})

// get all records


app.get("/players/", async (req, res) => {
    const getallplayers = `
        select * from cricket_team;`;


    const allplayers = await db.all(getallplayers);

    res.send(allplayers);


});


// get one record


app.get("/player/:playerid/", async (req, res) => {

    const { playerid } = req.params
    const getplayerquery = `select * from cricket_team where player_id = ${playerid}`

    const player = await db.get(getplayerquery);
    res.send(player);
});

// POST METHOD

app.post("/players/", async (req, res) => {
    const playerDetails = req.body;
    const {
        playerId,
        playerName,
        jerseyNumber,
        role
    }=playerDetails;

    const addPlayerQuery = `
    INSERT INTO cricket_team 
    VALUES
    (
    ${playerId},
    '${playerName}',
    ${jerseyNumber},
    '${role}'
    );`;
     await db.run(addPlayerQuery);
    res.send("add successfully");
});

// UPDATE METHOD

app.put("/player/:playerid/", async (req, res) =>{
    const { playerId } =req.params;
    const playerDetails =req.body;

    const {
        playerName,
        jerseyNumber,
        role
    }=playerDetails;
    const updateplayerquery=`
    UPDATE cricket_team SET
        playerName='${playerName}',
        jerseyNumber=${jerseyNumber},
        role='${ role}'
        WHERE 
        playerId =${playerId};`;
        await db.run(updateplayerquery);
        res.send("Player Updated Successfully");
})









// delete the one record


app.delete("/players/:playerId/", async (request, response) => {
    const { playerId } = request.params;
    const deleteplayerQuery = `
          DELETE FROM
            cricket_team
          WHERE
            player_id = ${playerId};`;
    await db.run(deleteplayerQuery);
    response.send("player removed");
});