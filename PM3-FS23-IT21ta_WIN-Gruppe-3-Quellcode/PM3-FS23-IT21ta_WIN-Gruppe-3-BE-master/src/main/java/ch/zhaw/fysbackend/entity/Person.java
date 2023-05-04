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
@Table(name="person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(nullable = false)
    private String lastname;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false)
    private String email;

    @Column
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(
            name="address_location_id",
            referencedColumnName = "id"
    )
    private Location addressLocation;

    @OneToMany(mappedBy = "contactPerson")
    private Set<ReservationSeries> reservationSeries;

    @OneToMany(mappedBy = "contactPerson")
    private Set<ReservationSeriesOverride> reservationSeriesOverrides;
}