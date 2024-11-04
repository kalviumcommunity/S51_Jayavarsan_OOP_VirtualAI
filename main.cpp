#include <iostream>
#include <string>

using namespace std;

class SmartDevice {
protected:
    string name;
    bool status;
    static int totalDevices;

public:
    SmartDevice(const string& name) : name(name), status(false) {
        totalDevices++;
    }

    void turnOn() {
        status = true;
        cout << name << " is now ON.\n";
    }

    void turnOff() {
        status = false;
        cout << name << " is now OFF.\n";
    }

    void showStatus() const {
        cout << name << " is " << (status ? "ON" : "OFF") << ".\n";
    }

    static int getTotalDevices() {
        return totalDevices;
    }

    ~SmartDevice() {
        totalDevices--;
    }
};

int SmartDevice::totalDevices = 0;

class Light : public SmartDevice {
public:
    Light(const string& name) : SmartDevice(name) {}

    void dimLight(int level) {
        cout << name << " dimmed to " << level << "%.\n";
    }
};

class Fan : public SmartDevice {
public:
    Fan(const string& name) : SmartDevice(name) {}

    void setSpeed(int speed) {
        cout << name << " set to speed " << speed << ".\n";
    }
};

int main() {
    const int numDevices = 3;
    SmartDevice* devices[numDevices] = {
        new Light("Living Room Light"),
        new Fan("Bedroom Fan"),
        new Light("Kitchen Light")
    };

    for (int i = 0; i < numDevices; ++i) {
        devices[i]->turnOn();
        devices[i]->showStatus();
    }

    cout << "Total devices: " << SmartDevice::getTotalDevices() << "\n";

    for (int i = 0; i < numDevices; ++i) {
        delete devices[i];
    }

    cout << "Total devices after cleanup: " << SmartDevice::getTotalDevices() << "\n";

    return 0;
}
