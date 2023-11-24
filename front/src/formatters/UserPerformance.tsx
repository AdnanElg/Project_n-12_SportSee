type KindType = {
  [key: number]: string;
};

type DataType = {
  value: number;
  kind: number;
}[];

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
      1: "cardio",
      2: "énergie",
      3: "endurance",
      4: "force",
      5: "vitesse",
      6: "intensité",
    };

    const formattedData = this.data.map((item) => ({
      value: item.value,
      kind: kindTranslations[item.kind],
    }));

    return formattedData;
  }
}

export default UserPerformance;
