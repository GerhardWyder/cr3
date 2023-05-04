-- all rentalUnits of all persons
select person.lastname, person.firstname,rentalUnit.name,location.city,location.latitude,location.longitude FROM person
join user on person.id=user.person_id
join rentalUnit on rentalUnit.unitOwner_user_id=user.id
join location on location.id=rentalUnit.location_id;

-- all rentalUnits of a person
select person.lastname, person.firstname,rentalUnit.name FROM person
join user on person.id=user.person_id
join rentalUnit on rentalUnit.unitOwner_user_id=user.id
where person.lastname = 'Schweizer';

-- all infrastructure of a rentalUnit
select infrastructure.name,infrastructure.quantity from rentalUnit
join infrastructure on infrastructure.rentalUnit_id=rentalUnit.id
where rentalUnit.name="Sportplatz Emmig";

-- all rentalUnits in a city
-- shows only one of two since one has only coordinates in location
-- might be a problem
select * from rentalUnit
join location on rentalUnit.location_id=location.id
where city = "Steckborn";