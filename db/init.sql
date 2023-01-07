CREATE TYPE status AS ENUM ('contact', 'dialogue', 'interview', 'offer', 'closed');

CREATE TABLE IF NOT EXISTS candidates (
	email VARCHAR PRIMARY KEY UNIQUE NOT NULL,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR NOT NULL,
  position VARCHAR NULL,
  phone VARCHAR NULL,
	created_AT TIMESTAMP NOT NULL,
  image_url VARCHAR NULL,
  current_status status NOT NULL
);