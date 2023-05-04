package ch.zhaw.fysbackend.controller;

import ch.zhaw.fysbackend.dto.RentalUnitDto;
import ch.zhaw.fysbackend.service.RentalUnitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rental")
@RequiredArgsConstructor
public class RentalUnitController {

    private final RentalUnitService rentalUnitService;

    @GetMapping(value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RentalUnitDto getRentalUnit(@PathVariable("id") Long id) {
        return rentalUnitService.getRentalUnit(id);
    }

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<RentalUnitDto> getListRentalUnit() {
        return rentalUnitService.listRentalUnit();
    }
}
