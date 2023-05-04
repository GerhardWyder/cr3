package ch.zhaw.fysbackend.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

@Value
@RequiredArgsConstructor
@Builder(toBuilder = true)
public class InventoryDto {
    String name;
    Integer quantity;
}
