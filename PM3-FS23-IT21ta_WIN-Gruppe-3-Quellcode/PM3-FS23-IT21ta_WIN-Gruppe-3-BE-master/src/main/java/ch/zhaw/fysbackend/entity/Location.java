package ch.zhaw.fysbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String street;

    @Column
    private String zip;

    @Column
    private String city;

    @Column(nullable = false)
    private float latitude;

    @Column(nullable = false)
    private float longitude;

    @OneToMany(mappedBy = "addressLocation")
    private Set<Person> persons;

    @OneToMany(mappedBy = "location")
    private Set<RentalUnit> rentalUnits;
}
