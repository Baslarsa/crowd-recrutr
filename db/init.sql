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

INSERT INTO candidates(email, first_name, last_name, position, phone, created_AT, image_url, current_status) VALUES 
('arne@alligator.se', 'Arne', 'Alligator', 'Frontend developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=1', 'contact'),
('bosse@busig.se', 'Bosse', 'Bus', 'Pain developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=2', 'contact'),
('styris@cykelstyre.se', 'Styrbjörn', 'Stolpe', 'Cozy developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=3', 'contact'),
('kerstin@karsten.se', 'Kerstin', 'Karsten', 'IOS developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=4', 'dialogue'),
('herre@bert.se', 'Herbert', 'Mutti', 'Android developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=5', 'dialogue'),
('julio@iglesias.es', 'Julio', 'Iglesias', 'Wrinkle developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=6', 'dialogue'),
('enrique@iglesias.se', 'Enrique', 'Iglesias', 'Emotion developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=7', 'dialogue'),
('jussi@vikingline.fi', 'Jussi', 'Pukkinen', 'Sisu developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=8', 'contact'),
('harry@alligator.se', 'Harry', 'Boy', 'Money developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=9', 'offer'),
('curry@masala.se', 'Curry', 'Nam', 'Sweat developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=10', 'offer'),
('arnes@palligator.se', 'Arne', 'Alligator', 'Backend developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=11', 'offer'),
('ilikecorn@corn.com', 'Corny', 'Boy', 'Corn developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=12', 'offer'),
('bore@stage.se', 'Kung', 'Bore', 'Frontend developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=13', 'interview'),
('kneten@knet.se', 'Kneten', 'Ismeten', 'Fart developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=14', 'interview'),
('barry@abok.se', 'Barry', 'Bok', 'Tear developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=15', 'interview'),
('knug@karl.se', 'Knug', 'Karl Gustaf', 'Cat developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=16', 'closed'),
('morran@alligator.se', 'Morran', 'Morrhår', 'Mosquito developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=17', 'closed'),
('palle@pallar.se', 'Palle', 'Kuling', 'Random developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=18', 'closed'),
('arnet@kalligator.se', 'Arthur', 'Slägga', 'Pain developer', '+46738411454', '2013-08-20 14:52:49', 'https://placekitten.com/300/300?image=19', 'closed');