package ch.zhaw.fysbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="rentalUnit")
public class RentalUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String unitType;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer reservationSlotSize;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "slotPrice_amount_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Amount slotPrice;

    @ManyToOne
    @JoinColumn(
            name = "unitOwner_person_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Person unitOwner;

    @ManyToOne
    @JoinColumn(
            name = "location_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Location location;

    @ManyToOne
    @JoinColumn(
            name = "contact_person_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Person contactPerson;

    @OneToMany(mappedBy = "rentalUnit")
    private Set<Infrastructure> infrastructures;

    @OneToMany(mappedBy = "rentalUnit")
    private Set<Inventory> inventories;

    @OneToMany(mappedBy = "rentalUnit")
    private Set<ReservationSeries> reservationSeries;

    @OneToMany(mappedBy = "rentalUnit")
    private Set<ReservationSeriesOverride> reservationSeriesOverrides;
}
