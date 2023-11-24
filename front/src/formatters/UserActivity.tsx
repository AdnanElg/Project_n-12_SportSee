type SessionType = {
  day: string;
  kilogram: number;
  calories: number;
}[];

type indexDayType = {
  [key: string]: number;
};

class UserActivity {
  userId: number;
  sessions: SessionType;

  constructor(userId: number, sessions: SessionType) {
    this.userId = userId;
    this.sessions = sessions;
  }

  getFormattedData() {
    const indexDay: indexDayType = {
      "2020-07-01": 1,
      "2020-07-02": 2,
      "2020-07-03": 3,
      "2020-07-04": 4,
      "2020-07-05": 5,
      "2020-07-06": 6,
      "2020-07-07": 7,
    };

    const formattedData = this.sessions.map((item) => ({
      day: indexDay[item.day],
      kilogram: item.kilogram,
      calories: item.calories,
    }));

    return formattedData;
  }
}

export default UserActivity;
