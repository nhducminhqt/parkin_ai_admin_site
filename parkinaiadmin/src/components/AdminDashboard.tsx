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

  // Get date range for the past week
  const getDateRange = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 7);

    const formatDate = (date: Date) => {
      return date.toISOString().slice(0, 19).replace("T", " ");
    };

    return {
      startTime: formatDate(start),
      endTime: formatDate(end),
    };
  };

  useEffect(() => {
    let isCancelled = false;

    const loadDashboardData = async () => {
      try {
        if (isCancelled) return;
        setLoading(true);
        const { startTime, endTime } = getDateRange();

        const [revenue, trends, status] = await Promise.all([
          fetchRevenue("1w", startTime, endTime),
          fetchTrends("1w", startTime, endTime),
          fetchStatus("1w", startTime, endTime),
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
  }, []);

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

      {/* Revenue Card */}
      <div className="dashboard-cards">
        <div className="dashboard-card revenue-card">
          <div className="card-header">
            <h3>Total Revenue</h3>
            <span className="card-period">Last 7 days</span>
          </div>
          <div className="card-value">
            ${revenueData?.total_revenue?.toFixed(2) || "0.00"}
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="dashboard-card orders-card">
          <div className="card-header">
            <h3>Total Orders</h3>
            <span className="card-period">Last 7 days</span>
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
