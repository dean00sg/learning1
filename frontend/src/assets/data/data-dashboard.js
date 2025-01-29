export const createInfoCard = (totalTrays, totalPlants, Success, Pending) => [
    { name: "Total Tray", value: totalTrays || "0", bgColor: "#001253",},
    { name: "Type of Plants", value: totalPlants || "0", bgColor: "#3E6D9C",},
    { name: "Success", value: Success || "0", bgColor: "#E14D2A",},
    { name: "Pending", value: Pending || "0", bgColor: "#FD841F",},
  ];
  
  export const generateColors = (count) => {
    const colors = [];
  
    for (let i = 0; i < count; i++) {
      const hue = (i * 360) / count;
      const saturation = 70;
      const lightness = 60;
  
      colors.push({
        background: `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`,
        border: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      });
    }
  
    return colors;
  };

  export const createplantEvents = (plants) => {
    const colors = generateColors(plants.length); // สร้างสีตามจำนวนพืชที่ได้รับ
  
    return plants.map((plant, index) => ({
      name: plant.name,
      plantingStart: plant.plantingStart,
      harvestDate: plant.harvestDate,
      color: colors[index].background,
    }));
  };
  
  export const createharvestData = (harvestDataChart) => {
    // 1. รวบรวมวันที่ทั้งหมดที่ไม่ซ้ำกัน
    const uniqueDates = [...new Set(harvestDataChart.map(item => item.harvestDate))];
    
    // 2. รวบรวมชื่อพืชที่ไม่ซ้ำกัน
    const plantTypes = [...new Set(harvestDataChart.map(item => item.plant_name))];
    
    // 3. สร้าง colors array
    const colors = generateColors(plantTypes.length);
    
    // 4. สร้าง datasets โดยจัดการข้อมูลตามวันที่
    const datasets = plantTypes.map((plant, index) => {
      const data = uniqueDates.map(date => {
        // หาข้อมูลที่ตรงกับพืชและวันที่นั้นๆ
        const entry = harvestDataChart.find(
          item => item.plant_name === plant && item.harvestDate === date
        );
        // ถ้าไม่มีข้อมูล return 0 หรือ null
        return entry ? entry.count : 0;
      });
  
      return {
        label: plant,
        data: data,
        type: "bar",
        backgroundColor: colors[index].background,
      };
    });
  
    return {
      labels: uniqueDates,
      datasets: datasets
    };
  };
  
  export const createPlantSummary = (SummaryData) => {
    const grouped = SummaryData.reduce((acc, item) => {
      if (!acc[item.plant_name]) acc[item.plant_name] = [];
      acc[item.plant_name].push(item.count);
      return acc;
    }, {});
  
    const labels = Object.keys(grouped);
    const data = labels.map((plant) => {
      const counts = grouped[plant];
      return counts[counts.length - 1];
    });
  
    const colors = generateColors(labels.length);
  
    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors.map((color) => color.background),
          borderColor: colors.map((color) => color.border),
          borderWidth: 1,
        },
      ],
    };
  };