package ch.zhaw.fysbackend.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

import java.math.BigDecimal;

@Value
@RequiredArgsConstructor
@Builder(toBuilder = true)
public class AmountDto {
    Long id;
    BigDecimal value;
    String currency;
}
