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
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id",
            nullable = false
    )
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "payable_amount_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Amount payableAmount;

    @OneToMany(mappedBy = "booking")
    private Set<Payment> payments;

    @OneToMany(mappedBy = "booking")
    private Set<ReservationSeries> reservationSeries;

    @OneToMany(mappedBy = "booking")
    private Set<ReservationSeriesOverride> reservationSeriesOverrides;
}
