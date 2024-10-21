import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class AirlineStaffDashboard extends Application {
    @Override
    public void start(Stage primaryStage) throws Exception {
        // GUI components
        Label titleLabel = new Label("Airline Staff Dashboard");
        VBox root = new VBox(titleLabel);

        // Scene setup
        Scene scene = new Scene(root, 600, 400);

        // Stage setup
        primaryStage.setTitle("Airline Staff Dashboard");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
