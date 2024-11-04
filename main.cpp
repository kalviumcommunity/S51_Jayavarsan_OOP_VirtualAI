#include <iostream>
#include <string>

using namespace std;

class SmartDevice {
protected:
    string name;
    bool status;

public:
    SmartDevice(const string& name) : name(name), status(false) {}

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
};

class Light : public SmartDevice {
public:
    Light(const string& name) : SmartDevice(name) {}

    void dimLight(int level) {
        cout << name << " dimmed to " << level << "%.\n";
    }
};

int main() {
    SmartDevice fan("Bedroom Fan");
    Light livingRoomLight("Living Room Light");

    fan.turnOn();
    fan.showStatus();

    livingRoomLight.turnOn();
    livingRoomLight.dimLight(50);
    livingRoomLight.showStatus();

    return 0;
}

