-- Find Your Space DML mock data
-- Inserts mock data into empty DB

USE FYSDB;
INSERT INTO location (street,zip,city,latitude,longitude)
	VALUES
		('Frauenfelerstrasse 7','8266','Steckborn',47.6653687,8.9831421),
		(NULL,NULL,NULL,47.658893, 8.987910),
		('Technikumstrasse 9','8401','Winterthur',47.4973902, 8.7294425),
        ('Sportplatzstrasse','8266','Steckborn',47.661080, 8.988350),
        ('Castellstrasse 3','8274','Tägerwilen',47.654780,9.130920);

INSERT INTO person (lastname,firstname,email,address_location_id)
	VALUES
		('Schweizer','Patrick','schwepa4@students.zhaw.ch',1),
		('Wieder','Gerald','gera@zhaw.ch',3),
		('Muster','Max','max@muster.ch',NULL),
        ('Kunde','Peter','peter@gmx.ch',NULL);

INSERT INTO user (password,role,person_id)
	VALUES
		('0edc83f56356d0981283ae999f0ea2fa43065c58','Owner',1), -- SHA1 P4ssw0rd.1234
		('a38e5842a04e7d3a4af3164f9dbfc07c4952a403','User',2), -- SHA1 pAsSwOrT
        ('34d2bed175f168db37d8902d5cf585a4c0e02c90','Owner',3), -- SHA1 Test.1234
        ('34d2bed175f168db37d8902d5cf585a4c0e02c90','User',4); -- SHA1 Test.1234

INSERT INTO amount (value, currency)
VALUES
	(20.00, 'CHF'),
    (10.00, 'CHF'),
    (80.00, 'CHF');

INSERT INTO rentalUnit (name,
                        unitType,
                        description,
                        reservationSlotSize,
                        slotPrice_amount_id,
                        unitOwner_person_id,
                        location_id,
                        contact_person_id)
	VALUES
		(
        'Tennisclub Steckborn',
        'Tennisplatz',
        'Tennisplatz mit Clubhaus',
        2,
        1,
        1,
        2,
        1
        ),
        (
        'Sportplatz Emmig',
        'Fussballplatz',
        'Fussballplatz mit Clubhaus',
		2,
        2,
        1,
        4,
        1
        ),
        (
        'Bürgerhalle',
        'Mehrzweckhalle',
        'Mehrzweckhalle in Tägerwilen',
		6,
        3,
        3,
        5,
        3
        );
	
INSERT INTO infrastructure (rentalUnit_id,name,quantity)
	VALUES
		(1,'Toiletten',2),
		(1,'Feuerstelle',1),
		(1,'Küche',1),
        (2,'Pissoirs',4),
        (2,'Toiletten',2),
        (2,'Umkleidekabine',1);

INSERT INTO inventory (rentalUnit_id,name,quantity)
	VALUES
		(1,'Tennisnetz',1),
		(1,'Tisch',2),
		(1,'Stuhl',16),
        (2,'Fussballtor',2),
        (2,'Manschafftstrikotset',2),
        (2,'Fussball',20);
	
INSERT INTO reservationSeries (
	contact_person_id,
    rentalUnit_id,
    reservationFrom,
    reservationTo,
    seriesStart,
    seriesEnd,
    intervalWeeks,
    weekdays,
    comment
    )
	VALUES
    (
		1,
		1,
        '10:00:00',
        '18:00:00',
        '2023-01-01',
        '2023-12-31',
        1,
        '0-0-0-0-0-1-0',
        'Vereinstraining'
	),
    (
		3,
        2,
        '23:00:00',
        '06:00:00',
        '2023-01-01',
        '2023-12-31',
        1,
        '1-1-1-1-1-1-1',
        'Geschlossen (Öffnungszeiten)'
    ),
    (
		3,
        2,
        '18:00:00',
        '22:00:00',
        '2023-01-01',
        '2023-12-31',
        1,
        '0-0-1-0-0-0-0',
        'Training B Junioren'
    );
	
INSERT INTO reservationSeriesOverride (
	contact_person_id,
    rentalUnit_id,
    reservationFrom,
    reservationTo,
    comment)
	VALUES
    (
		1,
        1,
        '2023-04-29 14:00:00',
        '2023-04-29 18:00:00',
        'Vereinstournier'
	);