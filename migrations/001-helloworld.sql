-- UP
CREATE TABLE Timer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT
)

CREATE TABLE TimerProject (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timerId INTEGER REFERENCES Timer(id),
    projectId INTEGER REFERENCES Project(id)

)
CREATE TABLE Project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
)

-- Down
DROP TABLE Timer;

DROP TABLE TimerProject;

DROP TABLE Project;