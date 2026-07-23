# 📶 ESP32 2.4GHz Wi-Fi Spectrum Analyzer & Network Inspector

**Elevator Pitch:** Build a high-performance, real-time 2.4GHz Wi-Fi RF congestion visualizer and touch network inspector using the ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS.

---

## 🛠️ Things Used in This Project

### Hardware Components
1. **ESP32 Cheap Yellow Display (ESP32-2432S022C / CYD)** (2.8" 240x320 TFT Touchscreen)
2. **USB-C / Micro-USB Cable** for power & flashing

### Software & Apps
1. **PlatformIO / Arduino IDE**
2. **LVGL v9** (Light and Versatile Graphics Library)
3. **FreeRTOS** (Dual-core task management)
4. **ESP32 Wi-Fi SDK**

---

## 📖 Project Story

Finding an uncongested Wi-Fi channel in crowded environments (offices, apartments, workshops) can significantly improve wireless performance. Commercial RF spectrum analyzers can be expensive, but using an ESP32 microcontroller and a touchscreen display, you can build a portable handheld Wi-Fi spectrum analyzer for under $15.

### Key Features
- 📊 **Real-Time 13-Channel Spectrum Density Graph:** Scans and displays Access Point saturation across 2.4GHz channels 1–13.
- 🟡 **Primary Channel Highlights:** Automatic gold indicators for non-overlapping channels (**1**, **6**, and **11**).
- 🚦 **Congestion Color Code:**
  - 🟢 **Clean (1–2 APs):** Recommended channel for router configuration.
  - 🟡 **Moderate (3–5 APs)**
  - 🔴 **Congested (6+ APs)**
- 📶 **Touch-Activated Network Inspector Modal:** Tapping any detected Wi-Fi network pops up a glassmorphic inspector card displaying:
  - **BSSID (MAC Address)**
  - **Center Frequency & Channel** (e.g. `Ch 6 - 2.437 GHz`)
  - **Security Encryption** (`WPA2-PSK`, `WPA3-PSK`, `Open`, `Enterprise`)
  - **Signal Strength Bar Meter** (`-30 dBm` to `-100 dBm`)
- ⚡ **Dual-Core Architecture:** FreeRTOS handles Wi-Fi scanning on Core 0 while LVGL v9 renders 60FPS graphics on Core 1.

---

## 🔌 Hardware Setup & Wiring

If using the **ESP32-2432S022C (CYD)**, all connections between the ILI9341 display, XPT2046 touch controller, and ESP32 are already routed on-board!

| Peripheral | ESP32 Pin |
| :--- | :--- |
| **Display SPI SCK** | GPIO 14 |
| **Display SPI MOSI** | GPIO 13 |
| **Display SPI MISO** | GPIO 12 |
| **Display CS** | GPIO 15 |
| **Display DC / RS** | GPIO 2 |
| **Display Backlight** | GPIO 21 |
| **Touch CS** | GPIO 33 |

---

## 🚀 Code & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/earlchirchir/ESP32-Spectrum-Radar.git
   ```
2. Open the project in **PlatformIO**.
3. Select board `esp32-2432S022C` in `platformio.ini`.
4. Build and flash the firmware to your board.

GitHub Repository: [https://github.com/earlchirchir/ESP32-Spectrum-Radar](https://github.com/earlchirchir/ESP32-Spectrum-Radar)

---

## 🏷️ Tags for Hackster.io
`#esp32`, `#wifi`, `#spectrum-analyzer`, `#lvgl`, `#freertos`, `#embedded-systems`, `#rf`
