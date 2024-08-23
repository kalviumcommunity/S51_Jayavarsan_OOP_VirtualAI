#include <iostream>
#include <vector>
#include <string>
#include <ctime>
#include <algorithm> 

using namespace std;


class SmartDevice {
protected:
    string name;
    bool status;

public:
    SmartDevice(const string& name) : name(name), status(false) {}

    SmartDevice& turnOn() {
        this->status = true;
        cout << this->name << " is now ON.\n";
        return *this;
    }

    SmartDevice& turnOff() {
        this->status = false;
        cout << this->name << " is now OFF.\n";
        return *this;
    }

    virtual void showStatus() const {
        cout << this->name << " is " << (this->status ? "ON" : "OFF") << ".\n";
    }

    string getName() const { return this->name; }

    virtual ~SmartDevice() = default;
};


class Light : public SmartDevice {
public:
    Light(const string& name) : SmartDevice(name) {}
};


class Thermostat : public SmartDevice {
private:
    int temperature;

public:
    Thermostat(const string& name, int temp) : SmartDevice(name), temperature(temp) {}

    void setTemperature(int temp) {
        this->temperature = temp;
        cout << this->name << " temperature set to " << this->temperature << " degrees.\n";
    }

    void showStatus() const override {
        cout << this->name << " is " << (this->status ? "ON" : "OFF") << " and set to " << this->temperature << " degrees.\n";
    }
};


class Email {
private:
    string subject;
    string body;
    bool read;

public:
    Email(const string& subject, const string& body)
        : subject(subject), body(body), read(false) {}

    void markAsRead() {
        this->read = true;
        cout << "Email \"" << this->subject << "\" marked as read.\n";
    }

    string getSubject() const { return this->subject; }

    void showEmail() const {
        cout << "Subject: " << this->subject << "\nBody: " << this->body << "\nStatus: " << (this->read ? "Read" : "Unread") << "\n";
    }
};


class Reminder {
private:
    string message;
    time_t timeSet;

public:
    Reminder(const string& message, time_t timeSet)
        : message(message), timeSet(timeSet) {}

    void showReminder() const {
        cout << "Reminder: " << this->message << " (Set at: " << ctime(&this->timeSet) << ")\n";
    }
};


class VirtualPersonalAssistant {
private:
    vector<SmartDevice*> devices;
    vector<Email*> emails;
    vector<Reminder*> reminders;

public:
    ~VirtualPersonalAssistant() {
        for (auto device : devices) {
            delete device;
        }
        for (auto email : emails) {
            delete email;
        }
        for (auto reminder : reminders) {
            delete reminder;
        }
    }

    void addDevice(SmartDevice* device) {
        devices.push_back(device);
    }

    void removeDevice(const string& name) {
        auto it = remove_if(devices.begin(), devices.end(),
            [&name](SmartDevice* device) {
                return device->getName() == name;
            });
        if (it != devices.end()) {
            delete *it;
            devices.erase(it, devices.end());
            cout << name << " has been removed.\n";
        } else {
            cout << name << " not found.\n";
        }
    }

    void controlDevice(const string& name, bool turnOn) {
        for (auto device : devices) {
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

    void addEmail(Email* email) {
        emails.push_back(email);
    }

    void addReminder(Reminder* reminder) {
        reminders.push_back(reminder);
    }

    void showAllStatuses() const {
        for (const auto& device : devices) {
            device->showStatus();
        }
    }

    void showAllEmails() const {
        for (const auto& email : emails) {
            email->showEmail();
        }
    }

    void showAllReminders() const {
        for (const auto& reminder : reminders) {
            reminder->showReminder();
        }
    }

    void markEmailAsRead(const string& subject) {
        for (auto email : emails) {
            if (email->getSubject() == subject) {
                email->markAsRead();
                return;
            }
        }
        cout << "Email with subject \"" << subject << "\" not found.\n";
    }
};

int main() {
    VirtualPersonalAssistant vpa;

    const int numDevices = 3;
    SmartDevice* deviceArray[numDevices] = {
        new Light("Living Room Light"),
        new Thermostat("Bedroom Thermostat", 22),
        new Light("Kitchen Light")
    };

    // Adding devices from the array to VirtualPersonalAssistant
    for (int i = 0; i < numDevices; ++i) {
        vpa.addDevice(deviceArray[i]);
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
            cout << "Exiting...\n";
            break;
        default:
            cout << "Invalid choice. Please try again.\n";
            break;
        }
    } while (choice != 4);

    return 0;
}
