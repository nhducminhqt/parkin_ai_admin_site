import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  fetchRevenue,
  fetchTrends,
  fetchStatus,
  RevenueData,
  TrendsData,
  StatusData,
} from "../api/dashboard";
import "../css/dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard: React.FC = () => {
  const [revenueData, setRevenueData] = useState<RevenueData | null>(null);
  const [trendsData, setTrendsData] = useState<TrendsData | null>(null);
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Get default date range for the past month
  const getDefaultDateRange = () => {
    const end = new Date();
    const start = new Date();
    start.setMonth(end.getMonth() - 1); // 1 month ago

    const formatDateInput = (date: Date) => {
      return date.toISOString().slice(0, 10); // YYYY-MM-DD format for input[type="date"]
    };

    return {
      startDate: formatDateInput(start),
      endDate: formatDateInput(end),
    };
  };

  const formatDateForAPI = (dateString: string, isEndDate: boolean = false) => {
    return isEndDate ? dateString + " 23:59:59" : dateString + " 00:00:00";
  };

  // Initialize default dates
  useEffect(() => {
    const { startDate: defaultStart, endDate: defaultEnd } =
      getDefaultDateRange();
    setStartDate(defaultStart);
    setEndDate(defaultEnd);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadDashboardData = async () => {
      try {
        if (isCancelled) return;
        setLoading(true);

        if (!startDate || !endDate) return;

        const startTime = formatDateForAPI(startDate, false);
        const endTime = formatDateForAPI(endDate, true);

        const [revenue, trends, status] = await Promise.all([
          fetchRevenue("1m", startTime, endTime),
          fetchTrends("1m", startTime, endTime),
          fetchStatus("1m", startTime, endTime),
        ]);

        if (!isCancelled) {
          setRevenueData(revenue);
          setTrendsData(trends);
          setStatusData(status);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err.message || "Failed to load dashboard data");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadDashboardData();

    return () => {
      isCancelled = true;
    };
  }, [startDate, endDate]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-loading">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      {/* Date Range Picker */}
      <div className="dashboard-date-picker">
        <div className="date-picker-group">
          <label htmlFor="start-date">Start Date:</label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="date-input"
          />
        </div>
        <div className="date-picker-group">
          <label htmlFor="end-date">End Date:</label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="date-input"
          />
        </div>
        <div className="date-picker-info">
          <span>
            Showing data from {startDate} to {endDate}
          </span>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="dashboard-cards">
        <div className="dashboard-card revenue-card">
          <div className="card-header">
            <h3>Total Revenue</h3>
            <span className="card-period">Custom Period</span>
          </div>
          <div className="card-value">
            ${revenueData?.total_revenue?.toFixed(2) || "0.00"}
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="dashboard-card orders-card">
          <div className="card-header">
            <h3>Total Orders</h3>
            <span className="card-period">Custom Period</span>
          </div>
          <div className="card-value">{trendsData?.total || 0}</div>
        </div>
      </div>

      {/* Trends Chart */}
      <div className="dashboard-chart-section">
        <h3>Order Trends</h3>
        <div className="chart-container">
          <Line
            data={{
              labels:
                trendsData?.orders?.map((order) => {
                  const date = new Date(order.date);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }) || [],
              datasets: [
                {
                  label: "Orders",
                  data: trendsData?.orders?.map((order) => order.count) || [],
                  borderColor: "#00dcb5",
                  backgroundColor: "rgba(0, 220, 181, 0.1)",
                  tension: 0.3,
                  fill: true,
                  pointBackgroundColor: "#00dcb5",
                  pointBorderColor: "#00606a",
                  pointBorderWidth: 2,
                  pointRadius: 4,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: "rgba(0, 96, 106, 0.1)",
                  },
                  ticks: {
                    color: "#00606a",
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "#00606a",
                  },
                },
              },
            }}
            height={200}
          />
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="dashboard-status-section">
        <h3>Order Status Breakdown</h3>
        <div className="status-grid">
          {statusData?.statuses?.map((status, index) => (
            <div key={index} className="status-item">
              <div className="status-label">{status.status}</div>
              <div className="status-count">{status.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
