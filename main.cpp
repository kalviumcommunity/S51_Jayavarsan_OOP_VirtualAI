#include <iostream>
#include <string>


class SmartDevice {
protected:
    std::string name;
    bool status;

public:
    SmartDevice(const std::string& name) : name(name), status(false) {}

    virtual void turnOn() {
        status = true;
        std::cout << name << " is now ON.\n";
    }

    virtual void turnOff() {
        status = false;
        std::cout << name << " is now OFF.\n";
    }

    virtual void showStatus() const {
        std::cout << name << " is " << (status ? "ON" : "OFF") << ".\n";
    }

    std::string getName() const { return name; }

    virtual ~SmartDevice() = default;
};


class Light : public SmartDevice {
public:
    Light(const std::string& name) : SmartDevice(name) {}
};

int main() {

    Light livingRoomLight("Living Room Light");


    livingRoomLight.turnOn();
    livingRoomLight.showStatus();
    livingRoomLight.turnOff();
    livingRoomLight.showStatus();

    return 0;
}
