import React, { useState } from 'react';
import { TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './RoiCalculator.css';

interface RoiCalculatorProps {
  onStartProject: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onStartProject }) => {
  const [numRooms, setNumRooms] = useState<number>(6);
  const [meetingsPerDay, setMeetingsPerDay] = useState<number>(4);
  const [avgAttendees, setAvgAttendees] = useState<number>(6);
  const avgHourlyCost = 45; // USD/hr eq benchmark

  // Formula: AV friction saves 10 mins (0.166 hrs) per meeting for each attendee
  // 250 working days per year
  const workingDays = 250;
  const hoursWastedPerMeeting = 10 / 60; // 0.166 hrs
  const totalAnnualMeetings = numRooms * meetingsPerDay * workingDays;
  const totalHoursSaved = Math.round(totalAnnualMeetings * hoursWastedPerMeeting * avgAttendees);
  const totalAnnualSavings = Math.round(totalHoursSaved * avgHourlyCost);
  const roiPaybackMonths = Math.max(2.8, (18000 * numRooms) / (totalAnnualSavings / 12)).toFixed(1);

  return (
    <div className="roi-calculator-panel glass-panel">
      <div className="roi-top-bar">
        <div>
          <div className="glass-pill">
            <TrendingUp size={13} />
            <span>ROI & EFFICIENCY MODEL</span>
          </div>
          <h3 className="roi-heading">Enterprise AV Downtime & Productivity ROI Model</h3>
          <p className="roi-sub">
            Quantify how one-touch automated room start, beamtracking audio, and proactive IP monitoring eliminate meeting start friction and save enterprise executive hours.
          </p>
        </div>
      </div>

      <div className="roi-body-grid">
        {/* Sliders Grid */}
        <div className="roi-sliders-col">
          {/* Slider 1: Rooms */}
          <div className="roi-slider-group">
            <div className="roi-slider-header">
              <span className="roi-label">NUMBER OF CONFERENCE / BOARDROOMS</span>
              <span className="roi-val text-cyan">{numRooms} Spaces</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={numRooms}
              onChange={e => {
                soundFx.playClick(700);
                setNumRooms(parseInt(e.target.value));
              }}
              className="roi-range-slider"
            />
          </div>

          {/* Slider 2: Meetings Per Day */}
          <div className="roi-slider-group">
            <div className="roi-slider-header">
              <span className="roi-label">AVERAGE MEETINGS / DAY PER ROOM</span>
              <span className="roi-val text-cyan">{meetingsPerDay} Sessions</span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              step="1"
              value={meetingsPerDay}
              onChange={e => {
                soundFx.playClick(700);
                setMeetingsPerDay(parseInt(e.target.value));
              }}
              className="roi-range-slider"
            />
          </div>

          {/* Slider 3: Attendees */}
          <div className="roi-slider-group">
            <div className="roi-slider-header">
              <span className="roi-label">AVERAGE ATTENDEES PER SESSION</span>
              <span className="roi-val text-cyan">{avgAttendees} Stakeholders</span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={avgAttendees}
              onChange={e => {
                soundFx.playClick(700);
                setAvgAttendees(parseInt(e.target.value));
              }}
              className="roi-range-slider"
            />
          </div>
        </div>

        {/* ROI Output Card */}
        <div className="roi-summary-col glass-panel">
          <span className="roi-summary-tag">ESTIMATED PRODUCTIVITY RECOVERY</span>

          <div className="roi-big-num-box">
            <span className="roi-big-symbol">$</span>
            <span className="roi-big-num text-gradient-cyan">
              {totalAnnualSavings.toLocaleString()}
            </span>
            <span className="roi-per-year">/ YEAR RECOVERED</span>
          </div>

          <div className="roi-stat-breakdown">
            <div className="roi-stat-row">
              <div className="stat-row-left">
                <Clock size={15} className="text-cyan" />
                <span>Productive Hours Saved:</span>
              </div>
              <span className="stat-row-val text-cyan">{totalHoursSaved.toLocaleString()} hrs/yr</span>
            </div>

            <div className="roi-stat-row">
              <div className="stat-row-left">
                <Users size={15} className="text-cyan" />
                <span>Annual Sessions Automated:</span>
              </div>
              <span className="stat-row-val">{totalAnnualMeetings.toLocaleString()} meetings</span>
            </div>

            <div className="roi-stat-row">
              <div className="stat-row-left">
                <TrendingUp size={15} className="text-emerald" />
                <span>Estimated Payback Timeline:</span>
              </div>
              <span className="stat-row-val text-emerald">~{roiPaybackMonths} Months</span>
            </div>
          </div>

          <button
            className="btn-primary roi-action-btn"
            onClick={onStartProject}
            data-cursor="start"
            data-cursor-text="UPGRADE"
          >
            <span>MODERNIZE YOUR ROOM FLEET</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
