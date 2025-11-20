import java.util.*;

public class YourDostAssignment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();

        int result = findSecondLargestUniqueElement(arr);

        if(result == -1) {
            System.out.println(result);
            System.out.println("Not enough unique elements");
        } else {
            System.out.println("second largest unique element is: " + result);
        }
    }

    private static int findSecondLargestUniqueElement(int[] arr) {
        if(arr.length < 2) return -1;

        Arrays.sort(arr);
        int largest = arr[arr.length - 1];
        int low = 0, high = arr.length - 1, result = -1;

        while(low <= high) {
            int mid = low + (high - low) / 2;

            if(arr[mid] < largest) {
                result = arr[mid];
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }
}


