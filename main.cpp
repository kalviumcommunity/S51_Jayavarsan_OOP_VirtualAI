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
    const int numLights = 3;  
    Light livingRoomLight("Living Room Light");
    Light kitchenLight("Kitchen Light");
    Light bedroomLight("Bedroom Light");

    // Array of Light objects
    Light lights[numLights] = {
        livingRoomLight,
        kitchenLight,
        bedroomLight
    };

    // Turn on all lights and show their status
    for (int i = 0; i < numLights; ++i) {
        lights[i].turnOn();
        lights[i].showStatus();
    }

    // Dim the lights to a specific level
    lights[0].dimLight(75);  
    lights[1].dimLight(50);  
    lights[2].dimLight(25);  

    return 0;
}
