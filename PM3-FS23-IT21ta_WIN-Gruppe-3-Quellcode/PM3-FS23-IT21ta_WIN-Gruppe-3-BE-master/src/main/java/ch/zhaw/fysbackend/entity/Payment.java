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
@Table(name="payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "amount_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Amount amount;

    @Column
    private String paymentMethod;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime paymentTimestamp;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name="booking_id",
            referencedColumnName = "id",
            nullable = false
    )
    private Booking booking;
}
