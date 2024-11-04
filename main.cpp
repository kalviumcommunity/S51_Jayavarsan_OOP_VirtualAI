#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include <ctime>
#include <algorithm>

using namespace std;

class SmartDevice {
protected:
    string name;
    bool status;

public:
    SmartDevice(const string& name) : name(name), status(false) {}
    virtual ~SmartDevice() = default;

    virtual void turnOn() {
        status = true;
        cout << name << " is now ON.\n";
    }

    virtual void turnOff() {
        status = false;
        cout << name << " is now OFF.\n";
    }

    string getName() const { return name; }

    virtual void showStatus() const = 0; // Pure virtual function, making this an abstract class
};

class Light : public SmartDevice {
public:
    Light(const string& name) : SmartDevice(name) {}

    void showStatus() const override {
        cout << name << " is " << (status ? "ON" : "OFF") << ".\n";
    }
};

class Thermostat : public SmartDevice {
private:
    int temperature;

public:
    Thermostat(const string& name, int temp) : SmartDevice(name), temperature(temp) {}

    int getTemperature() const { return temperature; }

    void setTemperature(int temp) {
        temperature = temp;
        cout << name << " temperature set to " << temperature << " degrees.\n";
    }

    void showStatus() const override {
        cout << name << " is " << (status ? "ON" : "OFF") << " and set to " << temperature << " degrees.\n";
    }
};

class Email {
private:
    string subject;
    string body;
    bool read;

public:
    Email(const string& subject, const string& body) : subject(subject), body(body), read(false) {}

    string getSubject() const { return subject; }

    void markAsRead() {
        read = true;
        cout << "Email \"" << subject << "\" marked as read.\n";
    }

    void showEmail() const {
        cout << "Subject: " << subject << "\nBody: " << body << "\nStatus: " << (read ? "Read" : "Unread") << "\n";
    }
};

class Reminder {
private:
    string message;
    time_t timeSet;

public:
    Reminder(const string& message, time_t timeSet) : message(message), timeSet(timeSet) {}

    void showReminder() const {
        cout << "Reminder: " << message << " (Set at: " << ctime(&timeSet) << ")\n";
    }
};

class VirtualPersonalAssistant {
private:
    vector<unique_ptr<SmartDevice>> devices;
    vector<unique_ptr<Email>> emails;
    vector<unique_ptr<Reminder>> reminders;

public:
    void addDevice(unique_ptr<SmartDevice> device) {
        devices.push_back(move(device));
    }

    void removeDevice(const string& name) {
        auto it = remove_if(devices.begin(), devices.end(),
            [&name](const unique_ptr<SmartDevice>& device) {
                return device->getName() == name;
            });
        if (it != devices.end()) {
            devices.erase(it, devices.end());
            cout << name << " has been removed.\n";
        } else {
            cout << name << " not found.\n";
        }
    }

    void controlDevice(const string& name, bool turnOn) {
        for (auto& device : devices) {
            if (device->getName() == name) {
                if (turnOn) {
                    device->turnOn();
                } else {
                    device->turnOff();
                }
                return;
            }
        }
        cout << name << " not found.\n";
    }

    void showAllStatuses() const {
        for (const auto& device : devices) {
            device->showStatus(); // Polymorphic call to showStatus
        }
    }
};

int main() {
    VirtualPersonalAssistant vpa;

    const int numDevices = 3;
    unique_ptr<SmartDevice> deviceArray[numDevices] = {
        make_unique<Light>("Living Room Light"),
        make_unique<Thermostat>("Bedroom Thermostat", 22),
        make_unique<Light>("Kitchen Light")
    };

    for (int i = 0; i < numDevices; ++i) {
        vpa.addDevice(move(deviceArray[i]));
    }

    int choice;

    do {
        cout << "\nVirtual Personal Assistant\n";
        cout << "1. Remove Device\n";
        cout << "2. Control Device\n";
        cout << "3. Show All Device Statuses\n";
        cout << "4. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore();

        switch (choice) {
        case 1: {
            string name;
            cout << "Enter device name to remove: ";
            getline(cin, name);
            vpa.removeDevice(name);
            break;
        }
        case 2: {
            string name;
            bool turnOn;
            cout << "Enter device name: ";
            getline(cin, name);
            cout << "Enter 1 to turn ON, 0 to turn OFF: ";
            cin >> turnOn;
            cin.ignore();
            vpa.controlDevice(name, turnOn);
            break;
        }
        case 3:
            vpa.showAllStatuses();
            break;
        case 4:
            break;
        default:
            cout << "Invalid choice. Please try again.\n";
            break;
        }
    } while (choice != 4);

    return 0;
}
