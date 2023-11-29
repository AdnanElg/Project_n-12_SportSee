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
  /**
   * Crée une instance de UserPerformance.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @param {KindType} kind - Les types d'activités avec leur traduction.
   * @param {DataType} data - Les données de performance.
   */
  userId: number;
  kind: KindType;
  data: DataType;

  constructor(userId: number, kind: KindType, data: DataType) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }

  /**
   * Obtient les données formatées de la performance de l'utilisateur.
   * @property {number} value - La valeur de la performance.
   * @property {string} kind - Le type d'activité traduit.
   */
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

// Exportation de la classe UserPerformance.
export default UserPerformance;
