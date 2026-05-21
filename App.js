import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function App() {
  const steps = ['Confirmed', 'Preparing', 'Picked Up', 'Delivered'];
  const activeStep = 'Preparing';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapText}>Map View</Text>
        </View>

        {/* Status Bar */}
        <View style={styles.statusContainer}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepWrapper}>
              <View
                style={[
                  styles.circle,
                  activeStep === step && styles.activeCircle,
                ]}
              >
                <Text
                  style={[
                    styles.circleText,
                    activeStep === step && styles.activeCircleText,
                  ]}
                >
                  {index + 1}
                </Text>
              </View>

              <Text
                style={[
                  styles.stepText,
                  activeStep === step && styles.activeStepText,
                ]}
              >
                {step}
              </Text>

              {index !== steps.length - 1 && (
                <View style={styles.line} />
              )}
            </View>
          ))}
        </View>

        {/* Restaurant Info */}
        <View style={styles.restaurantContainer}>
          <Text style={styles.restaurantName}>Spicy Kitchen</Text>

          <Text style={styles.itemText}>• Chicken Biryani</Text>
          <Text style={styles.itemText}>• Paneer Tikka</Text>
          <Text style={styles.itemText}>• Cold Coffee</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Delivery Person */}
        <View style={styles.deliveryContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>DP</Text>
          </View>

          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryName}>Rahul Sharma</Text>
            <Text style={styles.deliveryRole}>Delivery Partner</Text>
          </View>

          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Time */}
        <View style={styles.timeContainer}>
          <Text style={styles.estimatedLabel}>
            Estimated Delivery Time
          </Text>

          <Text style={styles.timeText}>25 mins</Text>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.trackButton}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  scrollContainer: {
    paddingBottom: 120,
  },

  mapContainer: {
    height: 220,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#555',
  },

  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
  },

  stepWrapper: {
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },

  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  activeCircle: {
    backgroundColor: '#FF6B00',
  },

  circleText: {
    color: '#666',
    fontWeight: '600',
  },

  activeCircleText: {
    color: '#FFF',
  },

  line: {
    position: 'absolute',
    top: 16,
    left: '55%',
    width: '100%',
    height: 3,
    backgroundColor: '#D9D9D9',
    zIndex: 1,
  },

  stepText: {
    marginTop: 8,
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },

  activeStepText: {
    color: '#FF6B00',
    fontWeight: '700',
  },

  restaurantContainer: {
    marginTop: 35,
    paddingHorizontal: 20,
  },

  restaurantName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    color: '#222',
  },

  itemText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 25,
    marginHorizontal: 20,
  },

  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#CFCFCF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444',
  },

  deliveryInfo: {
    flex: 1,
    marginLeft: 15,
  },

  deliveryName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  deliveryRole: {
    marginTop: 4,
    color: '#666',
  },

  callButton: {
    backgroundColor: '#28A745',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  callButtonText: {
    color: '#FFF',
    fontWeight: '700',
  },

  timeContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  estimatedLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },

  timeText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111',
  },

  trackButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FF6B00',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
  },

  trackButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
});