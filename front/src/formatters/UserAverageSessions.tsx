// Definition des type :
type SessionsType = {
  day: number;
  sessionLength: number;
}[];

type DaysType = {
  [key: number]: string;
};

// Definition  du formatter UserAverageSessions :
class UserAverageSessions {
  /**
   * Crée une instance de UserAverageSessions.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @param {SessionType} sessions - Les données des sessions.
   */
  userId: number;
  sessions: SessionsType;

  constructor(userId: number, sessions: SessionsType) {
    this.userId = userId;
    this.sessions = sessions;
  }

  /**
   * Obtient les données formatées des sessions moyennes de l'utilisateur.
   * @property {string} day - Le jour de la session moyenne.
   * @property {number} sessionLength - La durée de la session moyenne.
   */
  getFormattedData() {
    const days: DaysType = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    const formattedData = this.sessions.map((item) => ({
      day: days[item.day],
      sessionLength: item.sessionLength,
    }));

    return formattedData;
  }
}

// Exportation de la classe UserAverageSessions.
export default UserAverageSessions;
