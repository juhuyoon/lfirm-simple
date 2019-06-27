USE yoolhyun_email;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS comments;

-- Create the burgers table
CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    comments varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
