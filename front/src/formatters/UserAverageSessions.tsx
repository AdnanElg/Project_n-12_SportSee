type SessionsType = {
  day: number;
  sessionLength: number;
}[];

type DaysType = {
  [key: number]: string;
};

class UserAverageSessions {
  userId: number;
  sessions: SessionsType;

  constructor(userId: number, sessions: SessionsType) {
    this.userId = userId;
    this.sessions = sessions;
  }

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

export default UserAverageSessions;
