function citySelect() {
    city = sel.options[sel.selectedIndex].value;
    areas = ADDRESS.filter((value, index, array) =>
        value.CityName === city);
    areas[0].AreaList.forEach((value, index, array) => {
        selAreas[index] = new Option(value.AreaName, value.AreaName);
    })
}

function areaSelect() {
    let area = selAreas.options[selAreas.selectedIndex].value;

    roads = areas[0].AreaList.filter((value, index, array) =>
        value.AreaName === area);

    roads[0].RoadList.forEach((value, index, array) => {
        selRoads[index] = new Option(value.RoadName, value.RoadName);
    })

}