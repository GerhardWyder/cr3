package ch.zhaw.fysbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;


@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="reservationSeries")
public class ReservationSeries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(
            columnDefinition = "TIME",
            nullable = false
    )
    private LocalTime reservationFrom;

    @Column(
            columnDefinition = "TIME",
            nullable = false
    )
    private LocalTime reservationTo;

    @Column(
            columnDefinition = "DATE",
            nullable = false
    )
    private LocalDate seriesStart;

    @Column(
            columnDefinition = "DATE",
            nullable = false
    )
    private LocalDate seriesEnd;

    @Column(nullable = false)
    private Integer intervalWeeks;

    @Column(nullable = false)
    private String weekdays;

    @Column(nullable = false)
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
