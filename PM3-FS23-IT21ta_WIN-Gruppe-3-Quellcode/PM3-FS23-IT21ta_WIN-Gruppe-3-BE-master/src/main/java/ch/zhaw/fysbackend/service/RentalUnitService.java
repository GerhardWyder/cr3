package ch.zhaw.fysbackend.service;

import ch.zhaw.fysbackend.dto.*;
import ch.zhaw.fysbackend.entity.RentalUnit;
import ch.zhaw.fysbackend.repo.RentalUnitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RentalUnitService {
    private final RentalUnitRepository rentalUnitRepository;

    public RentalUnitDto getRentalUnit(Long id) {
        RentalUnit entity = this.rentalUnitRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NO_CONTENT));
        return mapToDto(entity);
    }

    public List<RentalUnitDto> listRentalUnit(){
        List<RentalUnit> entities = this.rentalUnitRepository.findAll();

        return entities.stream().map(this::mapToDto).toList();
    }

    private RentalUnitDto mapToDto(RentalUnit unit){
        return RentalUnitDto.builder()
                .id(unit.getId())
                .name(unit.getName())
                .description(unit.getDescription())
                .unitType(unit.getUnitType())
                .reservationSlotSize(unit.getReservationSlotSize())
                .slotPrice(new AmountDto(unit.getSlotPrice().getId(), unit.getSlotPrice().getValue(), unit.getSlotPrice().getCurrency()))
                .unitOwner(new PersonDto(unit.getUnitOwner().getId(), unit.getUnitOwner().getLastname(), unit.getUnitOwner().getFirstname(),
                        unit.getUnitOwner().getEmail(), unit.getUnitOwner().getPhoneNumber()))
                .location(new LocationDto(unit.getLocation().getId(), unit.getLocation().getStreet(), unit.getLocation().getZip(),
                        unit.getLocation().getCity(), unit.getLocation().getLatitude(), unit.getLocation().getLongitude()))
                .infrastructures(unit.getInfrastructures().stream()
                        .map(infrastructure -> new InfrastructureDto(infrastructure.getName(), infrastructure.getQuantity()))
                        .toList())
                .inventories(unit.getInventories().stream()
                        .map(inventory -> new InventoryDto(inventory.getName(), inventory.getQuantity()))
                        .toList())
                .build();
    }
}
