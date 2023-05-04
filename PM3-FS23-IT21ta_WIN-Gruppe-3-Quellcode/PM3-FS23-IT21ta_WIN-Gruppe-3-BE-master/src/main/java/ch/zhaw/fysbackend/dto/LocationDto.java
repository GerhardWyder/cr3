package ch.zhaw.fysbackend.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

@Value
@RequiredArgsConstructor
@Builder(toBuilder = true)
public class LocationDto {
    Long id;
    String street;
    String zip;
    String city;
    float latitude;
    float longitude;
}
