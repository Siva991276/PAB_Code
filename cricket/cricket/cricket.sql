create table cricket_team(player_id	INTEGER,player_name	TEXT,jersey_number	INTEGER , role	TEXT);

pragma table_info(cricket_team);


insert into cricket_team(player_id,player_name,jersey_number,role)
values
( 1, 'Lakshman', 5, 'All-rounder'),
( 2, 'dravid', 9, 'batsman'),
( 3, 'dhoni', 7, 'wicket-keeper'),
( 4, 'kohli', 44, 'captain'),
( 5, 'bhumrah', 11, 'bowler'),
( 6, 'chahal', 54, 'spinner'),
( 7, 'rohit', 43, 'batsman');

select * from cricket_team;