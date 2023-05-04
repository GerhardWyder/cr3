package ch.zhaw.fysbackend.repo;

import ch.zhaw.fysbackend.entity.RentalUnit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RentalUnitRepository extends JpaRepository<RentalUnit, Long> {
}
