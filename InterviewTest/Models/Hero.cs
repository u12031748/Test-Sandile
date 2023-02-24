using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewTest.Models
{
    public class Hero : IHero
    {
        private string name;
        private string power;
        private List<KeyValuePair<string, int>> stats;
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
        public string Power
        {
            get
            {
                return power;
            }
            set
            {
                power = value;
            }
        }
        public List<KeyValuePair<string, int>> Stats
        {
            get
            {
                return stats;
            }
            set
            {
                stats = value;
            }
        }
        public  void Evolve(int statIncrease = 5)
        {
             List<KeyValuePair<string, int>> temp = new List<KeyValuePair<string, int>>();

            foreach (var stat in this.Stats)
            {
                int val = stat.Value/2;
                int firstMultiple = val * 1;
                temp.Add(new KeyValuePair<string, int>(stat.Key, stat.Value+ firstMultiple));

            }
            stats = temp;

        }
    }
}
