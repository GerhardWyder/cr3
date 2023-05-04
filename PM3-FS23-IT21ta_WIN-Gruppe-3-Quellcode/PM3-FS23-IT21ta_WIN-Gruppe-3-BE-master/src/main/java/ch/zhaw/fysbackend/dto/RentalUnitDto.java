package ch.zhaw.fysbackend.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

import java.util.List;

@Value
@RequiredArgsConstructor
@Builder(toBuilder = true)
public class RentalUnitDto {
    Long id;
    String name;
    String description;
    String unitType;
    Integer reservationSlotSize;
    AmountDto slotPrice;
    PersonDto unitOwner;
    LocationDto location;
    List<InfrastructureDto> infrastructures;
    List<InventoryDto> inventories;
}