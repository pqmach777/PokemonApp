CREATE TABLE user (
    username varchar(20),
    team SERIAL NOT NULL PRIMARY KEY,
    pokemon_1 varchar,
    pokemon_2 varchar,
    pokemon_3 varchar,
    pokemon_4 varchar,
    pokemon_5 varchar,
    pokemon_6 varchar,
)

CREATE TABLE pokemon (
    name varchar,
    move_1 varchar,
    move_2 varchar,
    move_3 varchar,
    move_4 varchar,
    ability varchar,
    item varchar,
    nature varchar,
    hp_iv integer,
    speed_iv integer,
    defense integer,
    special_defense_iv integer,
    attack_iv integer,
    special_attack_iv integer,
)