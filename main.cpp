#include <iostream>
#include <string>


using namespace std;

class SmartDevice {
private:
    string name;
    bool status;

public:
    SmartDevice(const string& name) : name(name), status(false) {}


    }
};

class Light : public SmartDevice {
public:
    Light(const string& name) : SmartDevice(name) {}

    }

    cout << "Total devices: " << SmartDevice::getTotalDevices() << "\n";

    for (int i = 0; i < numDevices; ++i) {
        delete devices[i];
    }



    return 0;
}
