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

    void addEmail(unique_ptr<Email> email) {
        emails.push_back(move(email));
    }

    void addReminder(unique_ptr<Reminder> reminder) {
        reminders.push_back(move(reminder));
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
        for (auto& email : emails) {
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
    int choice;

    do {
        cout << "\nVirtual Personal Assistant\n";
        cout << "1. Add Device\n";
        cout << "2. Remove Device\n";
        cout << "3. Control Device\n";
        cout << "4. Add Email\n";
        cout << "5. Add Reminder\n";
        cout << "6. Show All Device Statuses\n";
        cout << "7. Show All Emails\n";
        cout << "8. Show All Reminders\n";
        cout << "9. Mark Email as Read\n";
        cout << "10. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore(); 

        switch (choice) {
        case 1: {
            string name;
            cout << "Enter device name: ";
            getline(cin, name);
            int type;
            cout << "Enter 1 for Light, 2 for Thermostat: ";
            cin >> type;
            cin.ignore(); 
            if (type == 1) {
                vpa.addDevice(make_unique<Light>(name));
            } else if (type == 2) {
                int temp;
                cout << "Enter initial temperature: ";
                cin >> temp;
                cin.ignore(); 
                vpa.addDevice(make_unique<Thermostat>(name, temp));
            } else {
                cout << "Invalid device type.\n";
            }
            break;
        }
        case 2: {
            string name;
            cout << "Enter device name to remove: ";
            getline(cin, name);
            vpa.removeDevice(name);
            break;
        }
        case 3: {
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
        case 4: {
            string subject, body;
            cout << "Enter email subject: ";
            getline(cin, subject);
            cout << "Enter email body: ";
            getline(cin, body);
            vpa.addEmail(make_unique<Email>(subject, body));
            break;
        }
        case 5: {
            string message;
            time_t now = time(nullptr);
            cout << "Enter reminder message: ";
            getline(cin, message);
            vpa.addReminder(make_unique<Reminder>(message, now));
            break;
        }
        case 6:
            vpa.showAllStatuses();
            break;
        case 7:
            vpa.showAllEmails();
            break;
        case 8:
            vpa.showAllReminders();
            break;
        case 9: {
            string subject;
            cout << "Enter email subject to mark as read: ";
            getline(cin, subject);
            vpa.markEmailAsRead(subject);
            break;
        }
        case 10:
            cout << "Exiting...\n";
            break;
        default:
            cout << "Invalid choice. Please try again.\n";
            break;
        }
    } while (choice != 10);

    return 0;
}
