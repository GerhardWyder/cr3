package ch.zhaw.fysbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer quantity;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name="rentalUnit_id",
            referencedColumnName = "id",
            nullable = false
    )
    private RentalUnit rentalUnit;
}
