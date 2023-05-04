-- Find Your Space DDL File
-- Creates the plain DB without any data
CREATE DATABASE fysdb;
USE fysdb;
CREATE TABLE location
(
    id        bigint NOT NULL AUTO_INCREMENT,
    street    varchar(50),
    zip       varchar(5),
    city      varchar(50),
    latitude  float,
    longitude float,
    PRIMARY KEY (id)
);

CREATE TABLE person (
	id					bigint				NOT NULL	AUTO_INCREMENT,
    lastname			varchar(50)			NOT NULL,
    firstname			varchar(50)			NOT NULL,
    email				varchar(50)			NOT NULL,
    phoneNumber			varchar(50)			,
    address_location_id	bigint				,
	PRIMARY KEY (id),
	FOREIGN KEY (address_location_id)		REFERENCES location	(id)
);

CREATE TABLE user (
	id			bigint			NOT NULL	AUTO_INCREMENT,
    password	varchar(50)		NOT NULL,
    role		varchar(50)		NOT NULL,
    person_id	bigint			NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (person_id)		REFERENCES person	(id)
);

CREATE TABLE amount (
	id			bigint		NOT NULL	AUTO_INCREMENT,
	value		decimal		NOT NULL,
	currency	varchar(3)	NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE payment (
	id					bigint		NOT NULL	AUTO_INCREMENT,
	value				decimal		NOT NULL,
	currency			varchar(3)	NOT NULL,
	paymentMethod		varchar(50)	NOT NULL,
	paymentTimestamp	dateTime	NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE booking (
	id					bigint		NOT NULL	AUTO_INCREMENT,
	user_id				bigint		NOT NULL,
	payable_amount_id	bigint		NOT NULL,
	payment_id			bigint		NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY	(user_id)			REFERENCES user		(id),
	FOREIGN KEY (payable_amount_id)	REFERENCES amount	(id),
	FOREIGN KEY (payment_id)		REFERENCES payment	(id)
);

CREATE TABLE rentalUnit
(
    id                  bigint      NOT NULL AUTO_INCREMENT,
    name                varchar(50) NOT NULL,
    description         varchar(50) NOT NULL,
    unitType            varchar(50) NOT NULL,
    reservationSlotSize int         NOT NULL,
    slotPrice_amount_id bigint      NOT NULL,
    unitOwner_person_id bigint      NOT NULL,
    location_id         bigint      NOT NULL,
    contact_person_id   bigint      NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (unitOwner_person_id) REFERENCES person (id),
    FOREIGN KEY (location_id) REFERENCES location (id),
    FOREIGN KEY (contact_person_id) REFERENCES person (id)
);


CREATE TABLE inventory (
	id				bigint		NOT NULL	AUTO_INCREMENT,
	rentalUnit_id	bigint		NOT NULL,
	name			varchar(50)	NOT NULL,
	quantity		int			NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (rentalUnit_id)	REFERENCES rentalUnit	(id)
);

CREATE TABLE infrastructure (
	id				bigint		NOT NULL	AUTO_INCREMENT,
	rentalUnit_id	bigint		NOT NULL,
	name			varchar(50)	NOT NULL,
	quantity		int			NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (rentalUnit_id)	REFERENCES rentalUnit	(id)
);

CREATE TABLE reservationSeries (
	id					bigint 		NOT NULL	AUTO_INCREMENT,
	rentalUnit_id		bigint 		NOT NULL,
	contact_person_id	bigint 		NOT NULL,
	booking_id			bigint 		,
	reservationFrom		time		NOT NULL,
	reservationTo		time 		NOT NULL,
    seriesStart			date		NOT NULL,
    seriesEnd			date		NOT NULL, 
	intervalWeeks		int 		NOT NULL,
	weekdays			char(13)	NOT NULL,
    comment				varchar(50)	NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (rentalUnit_id)		REFERENCES rentalUnit	(id),
	FOREIGN KEY (contact_person_id)	REFERENCES person		(id),
	FOREIGN KEY (booking_id)		REFERENCES booking		(id)	
);

CREATE TABLE reservationSeriesOverride (
	id 					bigint 			NOT NULL	AUTO_INCREMENT,
	rentalUnit_id		bigint 			NOT NULL,
	contact_person_id	bigint 			NOT NULL,
	booking_id			bigint 			,
	reservationFrom		datetime		NOT NULL,
	reservationTo 		datetime		NOT NULL,
    comment				varchar(50)		NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (rentalUnit_id)		REFERENCES rentalUnit	(id),
	FOREIGN KEY (contact_person_id)	REFERENCES person		(id),
	FOREIGN KEY (booking_id)		REFERENCES booking		(id)
);

