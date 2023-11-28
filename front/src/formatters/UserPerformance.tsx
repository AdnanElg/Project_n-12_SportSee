// Definition des type :
type KindType = {
  [key: number]: string;
};

type DataType = {
  value: number;
  kind: number;
}[];

// Definition  du formatter UserPerformance :
class UserPerformance {
  data: DataType;
  kind: KindType;
  userId: number;

  constructor(userId: number, kind: KindType, data: DataType) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }

  getFormattedData() {
    const kindTranslations: KindType = {
      1: "Cardio",
      2: "Énergie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    const formattedData = this.data.map((item) => ({
      value: item.value,
      kind: kindTranslations[item.kind],
    }));
    return formattedData;
  }
}

export default UserPerformance;
