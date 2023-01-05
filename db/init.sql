CREATE TYPE status AS ENUM ('contact', 'dialogue', 'interview', 'offer', 'closed');

CREATE TABLE IF NOT EXISTS candidates (
	email VARCHAR PRIMARY KEY UNIQUE NOT NULL,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR NOT NULL,
	created_AT TIMESTAMP NOT NULL,
  image_url VARCHAR NULL,
  current_status status NOT NULL
);

INSERT INTO candidates(email, first_name, last_name, created_AT, image_url, current_status) VALUES ('arne@alligator.se', 'Arne', 'Alligator', '2013-08-20 14:52:49', 'https://thispersondoesnotexist.com/', 'contact');