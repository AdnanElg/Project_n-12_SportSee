// Definition des type
type SessionType = {
  day: string;
  kilogram: number;
  calories: number;
}[];

class UserActivity {
  /**
   * Crée une instance de UserActivity.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @param {SessionType} sessions - Les données des sessions.
   */
  userId: number;
  sessions: SessionType;

  constructor(userId: number, sessions: SessionType) {
    this.userId = userId;
    this.sessions = sessions;
  }

  /**
   * Obtient les données formatées de l'activité de l'utilisateur.
   * @property {number} day - Le jour de la session.
   * @property {number} kilogram - Le poids en kilogrammes.
   * @property {number} calories - Le nombre de calories brûlées.
   */
  getFormattedData() {
    const formattedData = this.sessions.map((item) => ({
      day: parseInt(item.day.slice(9)),
      kilogram: item.kilogram,
      calories: item.calories,
    }));

    return formattedData;
  }
}

// Exportation de la classe UserActivity.
export default UserActivity;
