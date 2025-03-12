import React from "react";
import { Button } from "../ui/Button";

interface CruiseSearchProps {
  onSearch?: (searchParams: {
    destination: string;
    date: string;
    duration: string;
  }) => void;
}

const CruiseSearch: React.FC<CruiseSearchProps> = ({ onSearch }) => {
  const [destination, setDestination] = React.useState("");
  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ destination, date, duration });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-serif font-semibold text-uniworld-blue mb-4">
        Find Your Perfect Cruise
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Destination
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-uniworld-blue focus:ring-uniworld-blue"
              required
            >
              <option value="">Select Destination</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="south-america">South America</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Travel Date
            </label>
            <input
              type="month"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-uniworld-blue focus:ring-uniworld-blue"
              required
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Duration
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-uniworld-blue focus:ring-uniworld-blue"
              required
            >
              <option value="">Select Duration</option>
              <option value="7-10">7-10 Days</option>
              <option value="11-14">11-14 Days</option>
              <option value="15+">15+ Days</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Search Cruises</Button>
        </div>
      </form>
    </div>
  );
};

export default CruiseSearch; 