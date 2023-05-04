package ch.zhaw.fysbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="reservationSeriesOverride")
public class ReservationSeriesOverride {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(
            columnDefinition = "TIMESTAMP",
            nullable = false
    )
    private LocalDateTime reservationFrom;

    @Column(
            columnDefinition = "TIMESTAMP",
            nullable = false
    )
    private LocalDateTime reservationTo;

    @Column
    private String comment;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name="booking_id",
            referencedColumnName = "id"
    )
    private Booking booking;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name="contact_person_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Person contactPerson;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name="rentalUnit_id",
            referencedColumnName = "id",
            nullable = false
    )
    private RentalUnit rentalUnit;
}
