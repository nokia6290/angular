import { ListWrapper } from 'angular2/src/facade/collection';
import { unimplemented } from 'angular2/src/facade/exceptions';
import { isPresent } from 'angular2/src/facade/lang';
/**
 * Represents a container where one or more Views can be attached.
 *
 * The container can contain two kinds of Views. Host Views, created by instantiating a
 * {@link Component} via {@link #createHostView}, and Embedded Views, created by instantiating an
 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
 *
 * The location of the View Container within the containing View is specified by the Anchor
 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
 * have a single View Container.
 *
 * Root elements of Views attached to this container become siblings of the Anchor Element in
 * the Rendered View.
 *
 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
 * with `ViewContainerRef` on the Element, or you obtain it via
 * {@link AppViewManager#getViewContainer}.
 *
 * <!-- TODO(i): we are also considering ElementRef#viewContainer api -->
 */
export class ViewContainerRef {
    /**
     * Anchor element that specifies the location of this container in the containing View.
     * <!-- TODO: rename to anchorElement -->
     */
    get element() { return unimplemented(); }
    /**
     * Destroys all Views in this container.
     */
    clear() {
        for (var i = this.length - 1; i >= 0; i--) {
            this.remove(i);
        }
    }
    /**
     * Returns the number of Views currently attached to this container.
     */
    get length() { return unimplemented(); }
    ;
}
export class ViewContainerRef_ extends ViewContainerRef {
    constructor(_element) {
        super();
        this._element = _element;
    }
    get(index) { return this._element.nestedViews[index].ref; }
    get length() {
        var views = this._element.nestedViews;
        return isPresent(views) ? views.length : 0;
    }
    get element() { return this._element.ref; }
    // TODO(rado): profile and decide whether bounds checks should be added
    // to the methods below.
    createEmbeddedView(templateRef, index = -1) {
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.createEmbeddedViewInContainer(this._element.ref, index, templateRef);
    }
    createHostView(hostViewFactoryRef, index = -1, dynamicallyCreatedProviders = null, projectableNodes = null) {
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.createHostViewInContainer(this._element.ref, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes);
    }
    // TODO(i): refactor insert+remove into move
    insert(viewRef, index = -1) {
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.attachViewInContainer(this._element.ref, index, viewRef);
    }
    indexOf(viewRef) {
        return ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
    }
    // TODO(i): rename to destroy
    remove(index = -1) {
        if (index == -1)
            index = this.length - 1;
        var vm = this._element.parentView.viewManager;
        return vm.destroyViewInContainer(this._element.ref, index);
        // view is intentionally not returned to the client.
    }
    // TODO(i): refactor insert+remove into move
    detach(index = -1) {
        if (index == -1)
            index = this.length - 1;
        var vm = this._element.parentView.viewManager;
        return vm.detachViewInContainer(this._element.ref, index);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19jb250YWluZXJfcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1pdmExOFA4QS50bXAvYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdDQUFnQztPQUNuRCxFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztPQUVyRCxFQUFDLFNBQVMsRUFBVSxNQUFNLDBCQUEwQjtBQWUzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNIO0lBQ0U7OztPQUdHO0lBQ0gsSUFBSSxPQUFPLEtBQWlCLE1BQU0sQ0FBYSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFakU7O09BRUc7SUFDSCxLQUFLO1FBQ0gsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFPRDs7T0FFRztJQUNILElBQUksTUFBTSxLQUFhLE1BQU0sQ0FBUyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBMEQxRCxDQUFDO0FBRUQsdUNBQXVDLGdCQUFnQjtJQUNyRCxZQUFvQixRQUFvQjtRQUFJLE9BQU8sQ0FBQztRQUFoQyxhQUFRLEdBQVIsUUFBUSxDQUFZO0lBQWEsQ0FBQztJQUV0RCxHQUFHLENBQUMsS0FBYSxJQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRixJQUFJLE1BQU07UUFDUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLE9BQU8sS0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV4RCx1RUFBdUU7SUFDdkUsd0JBQXdCO0lBQ3hCLGtCQUFrQixDQUFDLFdBQXdCLEVBQUUsS0FBSyxHQUFXLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDOUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELGNBQWMsQ0FBQyxrQkFBc0MsRUFBRSxLQUFLLEdBQVcsQ0FBQyxDQUFDLEVBQzFELDJCQUEyQixHQUF1QixJQUFJLEVBQ3RELGdCQUFnQixHQUFZLElBQUk7UUFDN0MsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUM1QywyQkFBMkIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsTUFBTSxDQUFDLE9BQWdCLEVBQUUsS0FBSyxHQUFXLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDOUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFnQjtRQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBYSxPQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELDZCQUE2QjtJQUM3QixNQUFNLENBQUMsS0FBSyxHQUFXLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0Qsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsTUFBTSxDQUFDLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7QUFDSCxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHt1bmltcGxlbWVudGVkfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtSZXNvbHZlZFByb3ZpZGVyLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge2lzUHJlc2VudCwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtBcHBFbGVtZW50fSBmcm9tICcuL2VsZW1lbnQnO1xuXG5pbXBvcnQge0VsZW1lbnRSZWYsIEVsZW1lbnRSZWZffSBmcm9tICcuL2VsZW1lbnRfcmVmJztcbmltcG9ydCB7VGVtcGxhdGVSZWYsIFRlbXBsYXRlUmVmX30gZnJvbSAnLi90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHtcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBIb3N0Vmlld1JlZixcbiAgSG9zdFZpZXdGYWN0b3J5UmVmLFxuICBIb3N0Vmlld0ZhY3RvcnlSZWZfLFxuICBWaWV3UmVmLFxuICBWaWV3UmVmX1xufSBmcm9tICcuL3ZpZXdfcmVmJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29udGFpbmVyIHdoZXJlIG9uZSBvciBtb3JlIFZpZXdzIGNhbiBiZSBhdHRhY2hlZC5cbiAqXG4gKiBUaGUgY29udGFpbmVyIGNhbiBjb250YWluIHR3byBraW5kcyBvZiBWaWV3cy4gSG9zdCBWaWV3cywgY3JlYXRlZCBieSBpbnN0YW50aWF0aW5nIGFcbiAqIHtAbGluayBDb21wb25lbnR9IHZpYSB7QGxpbmsgI2NyZWF0ZUhvc3RWaWV3fSwgYW5kIEVtYmVkZGVkIFZpZXdzLCBjcmVhdGVkIGJ5IGluc3RhbnRpYXRpbmcgYW5cbiAqIHtAbGluayBUZW1wbGF0ZVJlZiBFbWJlZGRlZCBUZW1wbGF0ZX0gdmlhIHtAbGluayAjY3JlYXRlRW1iZWRkZWRWaWV3fS5cbiAqXG4gKiBUaGUgbG9jYXRpb24gb2YgdGhlIFZpZXcgQ29udGFpbmVyIHdpdGhpbiB0aGUgY29udGFpbmluZyBWaWV3IGlzIHNwZWNpZmllZCBieSB0aGUgQW5jaG9yXG4gKiBgZWxlbWVudGAuIEVhY2ggVmlldyBDb250YWluZXIgY2FuIGhhdmUgb25seSBvbmUgQW5jaG9yIEVsZW1lbnQgYW5kIGVhY2ggQW5jaG9yIEVsZW1lbnQgY2FuIG9ubHlcbiAqIGhhdmUgYSBzaW5nbGUgVmlldyBDb250YWluZXIuXG4gKlxuICogUm9vdCBlbGVtZW50cyBvZiBWaWV3cyBhdHRhY2hlZCB0byB0aGlzIGNvbnRhaW5lciBiZWNvbWUgc2libGluZ3Mgb2YgdGhlIEFuY2hvciBFbGVtZW50IGluXG4gKiB0aGUgUmVuZGVyZWQgVmlldy5cbiAqXG4gKiBUbyBhY2Nlc3MgYSBgVmlld0NvbnRhaW5lclJlZmAgb2YgYW4gRWxlbWVudCwgeW91IGNhbiBlaXRoZXIgcGxhY2UgYSB7QGxpbmsgRGlyZWN0aXZlfSBpbmplY3RlZFxuICogd2l0aCBgVmlld0NvbnRhaW5lclJlZmAgb24gdGhlIEVsZW1lbnQsIG9yIHlvdSBvYnRhaW4gaXQgdmlhXG4gKiB7QGxpbmsgQXBwVmlld01hbmFnZXIjZ2V0Vmlld0NvbnRhaW5lcn0uXG4gKlxuICogPCEtLSBUT0RPKGkpOiB3ZSBhcmUgYWxzbyBjb25zaWRlcmluZyBFbGVtZW50UmVmI3ZpZXdDb250YWluZXIgYXBpIC0tPlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlld0NvbnRhaW5lclJlZiB7XG4gIC8qKlxuICAgKiBBbmNob3IgZWxlbWVudCB0aGF0IHNwZWNpZmllcyB0aGUgbG9jYXRpb24gb2YgdGhpcyBjb250YWluZXIgaW4gdGhlIGNvbnRhaW5pbmcgVmlldy5cbiAgICogPCEtLSBUT0RPOiByZW5hbWUgdG8gYW5jaG9yRWxlbWVudCAtLT5cbiAgICovXG4gIGdldCBlbGVtZW50KCk6IEVsZW1lbnRSZWYgeyByZXR1cm4gPEVsZW1lbnRSZWY+dW5pbXBsZW1lbnRlZCgpOyB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFsbCBWaWV3cyBpbiB0aGlzIGNvbnRhaW5lci5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUge0BsaW5rIFZpZXdSZWZ9IGZvciB0aGUgVmlldyBsb2NhdGVkIGluIHRoaXMgY29udGFpbmVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqL1xuICBhYnN0cmFjdCBnZXQoaW5kZXg6IG51bWJlcik6IFZpZXdSZWY7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBWaWV3cyBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhpcyBjb250YWluZXIuXG4gICAqL1xuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7IHJldHVybiA8bnVtYmVyPnVuaW1wbGVtZW50ZWQoKTsgfTtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGVzIGFuIEVtYmVkZGVkIFZpZXcgYmFzZWQgb24gdGhlIHtAbGluayBUZW1wbGF0ZVJlZiBgdGVtcGxhdGVSZWZgfSBhbmQgaW5zZXJ0cyBpdFxuICAgKiBpbnRvIHRoaXMgY29udGFpbmVyIGF0IHRoZSBzcGVjaWZpZWQgYGluZGV4YC5cbiAgICpcbiAgICogSWYgYGluZGV4YCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgbmV3IFZpZXcgd2lsbCBiZSBpbnNlcnRlZCBhcyB0aGUgbGFzdCBWaWV3IGluIHRoZSBjb250YWluZXIuXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHtAbGluayBWaWV3UmVmfSBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgVmlldy5cbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWYsIGluZGV4PzogbnVtYmVyKTogRW1iZWRkZWRWaWV3UmVmO1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZXMgYSBzaW5nbGUge0BsaW5rIENvbXBvbmVudH0gYW5kIGluc2VydHMgaXRzIEhvc3QgVmlldyBpbnRvIHRoaXMgY29udGFpbmVyIGF0IHRoZVxuICAgKiBzcGVjaWZpZWQgYGluZGV4YC5cbiAgICpcbiAgICogVGhlIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQgdXNpbmcgaXRzIHtAbGluayBQcm90b1ZpZXdSZWYgYHByb3RvVmlld2B9IHdoaWNoIGNhbiBiZVxuICAgKiBvYnRhaW5lZCB2aWEge0BsaW5rIENvbXBpbGVyI2NvbXBpbGVJbkhvc3R9LlxuICAgKlxuICAgKiBJZiBgaW5kZXhgIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBuZXcgVmlldyB3aWxsIGJlIGluc2VydGVkIGFzIHRoZSBsYXN0IFZpZXcgaW4gdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgYGR5bmFtaWNhbGx5Q3JlYXRlZFByb3ZpZGVyc2AsIHdoaWNoIGNvbmZpZ3VyZSB0aGUge0BsaW5rIEluamVjdG9yfVxuICAgKiB0aGF0IHdpbGwgYmUgY3JlYXRlZCBmb3IgdGhlIEhvc3QgVmlldy5cbiAgICpcbiAgICogUmV0dXJucyB0aGUge0BsaW5rIEhvc3RWaWV3UmVmfSBvZiB0aGUgSG9zdCBWaWV3IGNyZWF0ZWQgZm9yIHRoZSBuZXdseSBpbnN0YW50aWF0ZWQgQ29tcG9uZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlSG9zdFZpZXcoaG9zdFZpZXdGYWN0b3J5UmVmOiBIb3N0Vmlld0ZhY3RvcnlSZWYsIGluZGV4PzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljYWxseUNyZWF0ZWRQcm92aWRlcnM/OiBSZXNvbHZlZFByb3ZpZGVyW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RhYmxlTm9kZXM/OiBhbnlbXVtdKTogSG9zdFZpZXdSZWY7XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSBWaWV3IGlkZW50aWZpZWQgYnkgYSB7QGxpbmsgVmlld1JlZn0gaW50byB0aGUgY29udGFpbmVyIGF0IHRoZSBzcGVjaWZpZWQgYGluZGV4YC5cbiAgICpcbiAgICogSWYgYGluZGV4YCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgbmV3IFZpZXcgd2lsbCBiZSBpbnNlcnRlZCBhcyB0aGUgbGFzdCBWaWV3IGluIHRoZSBjb250YWluZXIuXG4gICAqXG4gICAqIFJldHVybnMgdGhlIGluc2VydGVkIHtAbGluayBWaWV3UmVmfS5cbiAgICovXG4gIGFic3RyYWN0IGluc2VydCh2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWYsIGluZGV4PzogbnVtYmVyKTogRW1iZWRkZWRWaWV3UmVmO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgVmlldywgc3BlY2lmaWVkIHZpYSB7QGxpbmsgVmlld1JlZn0sIHdpdGhpbiB0aGUgY3VycmVudCBjb250YWluZXIgb3JcbiAgICogYC0xYCBpZiB0aGlzIGNvbnRhaW5lciBkb2Vzbid0IGNvbnRhaW4gdGhlIFZpZXcuXG4gICAqL1xuICBhYnN0cmFjdCBpbmRleE9mKHZpZXdSZWY6IFZpZXdSZWYpOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGEgVmlldyBhdHRhY2hlZCB0byB0aGlzIGNvbnRhaW5lciBhdCB0aGUgc3BlY2lmaWVkIGBpbmRleGAuXG4gICAqXG4gICAqIElmIGBpbmRleGAgaXMgbm90IHNwZWNpZmllZCwgdGhlIGxhc3QgVmlldyBpbiB0aGUgY29udGFpbmVyIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIGFic3RyYWN0IHJlbW92ZShpbmRleD86IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFVzZSBhbG9uZyB3aXRoIHtAbGluayAjaW5zZXJ0fSB0byBtb3ZlIGEgVmlldyB3aXRoaW4gdGhlIGN1cnJlbnQgY29udGFpbmVyLlxuICAgKlxuICAgKiBJZiB0aGUgYGluZGV4YCBwYXJhbSBpcyBvbWl0dGVkLCB0aGUgbGFzdCB7QGxpbmsgVmlld1JlZn0gaXMgZGV0YWNoZWQuXG4gICAqL1xuICBhYnN0cmFjdCBkZXRhY2goaW5kZXg/OiBudW1iZXIpOiBFbWJlZGRlZFZpZXdSZWY7XG59XG5cbmV4cG9ydCBjbGFzcyBWaWV3Q29udGFpbmVyUmVmXyBleHRlbmRzIFZpZXdDb250YWluZXJSZWYge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBBcHBFbGVtZW50KSB7IHN1cGVyKCk7IH1cblxuICBnZXQoaW5kZXg6IG51bWJlcik6IEVtYmVkZGVkVmlld1JlZiB7IHJldHVybiB0aGlzLl9lbGVtZW50Lm5lc3RlZFZpZXdzW2luZGV4XS5yZWY7IH1cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHZhciB2aWV3cyA9IHRoaXMuX2VsZW1lbnQubmVzdGVkVmlld3M7XG4gICAgcmV0dXJuIGlzUHJlc2VudCh2aWV3cykgPyB2aWV3cy5sZW5ndGggOiAwO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKTogRWxlbWVudFJlZl8geyByZXR1cm4gdGhpcy5fZWxlbWVudC5yZWY7IH1cblxuICAvLyBUT0RPKHJhZG8pOiBwcm9maWxlIGFuZCBkZWNpZGUgd2hldGhlciBib3VuZHMgY2hlY2tzIHNob3VsZCBiZSBhZGRlZFxuICAvLyB0byB0aGUgbWV0aG9kcyBiZWxvdy5cbiAgY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZiwgaW5kZXg6IG51bWJlciA9IC0xKTogRW1iZWRkZWRWaWV3UmVmIHtcbiAgICBpZiAoaW5kZXggPT0gLTEpIGluZGV4ID0gdGhpcy5sZW5ndGg7XG4gICAgdmFyIHZtID0gdGhpcy5fZWxlbWVudC5wYXJlbnRWaWV3LnZpZXdNYW5hZ2VyO1xuICAgIHJldHVybiB2bS5jcmVhdGVFbWJlZGRlZFZpZXdJbkNvbnRhaW5lcih0aGlzLl9lbGVtZW50LnJlZiwgaW5kZXgsIHRlbXBsYXRlUmVmKTtcbiAgfVxuXG4gIGNyZWF0ZUhvc3RWaWV3KGhvc3RWaWV3RmFjdG9yeVJlZjogSG9zdFZpZXdGYWN0b3J5UmVmLCBpbmRleDogbnVtYmVyID0gLTEsXG4gICAgICAgICAgICAgICAgIGR5bmFtaWNhbGx5Q3JlYXRlZFByb3ZpZGVyczogUmVzb2x2ZWRQcm92aWRlcltdID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgcHJvamVjdGFibGVOb2RlczogYW55W11bXSA9IG51bGwpOiBIb3N0Vmlld1JlZiB7XG4gICAgaWYgKGluZGV4ID09IC0xKSBpbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciB2bSA9IHRoaXMuX2VsZW1lbnQucGFyZW50Vmlldy52aWV3TWFuYWdlcjtcbiAgICByZXR1cm4gdm0uY3JlYXRlSG9zdFZpZXdJbkNvbnRhaW5lcih0aGlzLl9lbGVtZW50LnJlZiwgaW5kZXgsIGhvc3RWaWV3RmFjdG9yeVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljYWxseUNyZWF0ZWRQcm92aWRlcnMsIHByb2plY3RhYmxlTm9kZXMpO1xuICB9XG5cbiAgLy8gVE9ETyhpKTogcmVmYWN0b3IgaW5zZXJ0K3JlbW92ZSBpbnRvIG1vdmVcbiAgaW5zZXJ0KHZpZXdSZWY6IFZpZXdSZWYsIGluZGV4OiBudW1iZXIgPSAtMSk6IEVtYmVkZGVkVmlld1JlZiB7XG4gICAgaWYgKGluZGV4ID09IC0xKSBpbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciB2bSA9IHRoaXMuX2VsZW1lbnQucGFyZW50Vmlldy52aWV3TWFuYWdlcjtcbiAgICByZXR1cm4gdm0uYXR0YWNoVmlld0luQ29udGFpbmVyKHRoaXMuX2VsZW1lbnQucmVmLCBpbmRleCwgdmlld1JlZik7XG4gIH1cblxuICBpbmRleE9mKHZpZXdSZWY6IFZpZXdSZWYpOiBudW1iZXIge1xuICAgIHJldHVybiBMaXN0V3JhcHBlci5pbmRleE9mKHRoaXMuX2VsZW1lbnQubmVzdGVkVmlld3MsICg8Vmlld1JlZl8+dmlld1JlZikuaW50ZXJuYWxWaWV3KTtcbiAgfVxuXG4gIC8vIFRPRE8oaSk6IHJlbmFtZSB0byBkZXN0cm95XG4gIHJlbW92ZShpbmRleDogbnVtYmVyID0gLTEpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggPT0gLTEpIGluZGV4ID0gdGhpcy5sZW5ndGggLSAxO1xuICAgIHZhciB2bSA9IHRoaXMuX2VsZW1lbnQucGFyZW50Vmlldy52aWV3TWFuYWdlcjtcbiAgICByZXR1cm4gdm0uZGVzdHJveVZpZXdJbkNvbnRhaW5lcih0aGlzLl9lbGVtZW50LnJlZiwgaW5kZXgpO1xuICAgIC8vIHZpZXcgaXMgaW50ZW50aW9uYWxseSBub3QgcmV0dXJuZWQgdG8gdGhlIGNsaWVudC5cbiAgfVxuXG4gIC8vIFRPRE8oaSk6IHJlZmFjdG9yIGluc2VydCtyZW1vdmUgaW50byBtb3ZlXG4gIGRldGFjaChpbmRleDogbnVtYmVyID0gLTEpOiBFbWJlZGRlZFZpZXdSZWYge1xuICAgIGlmIChpbmRleCA9PSAtMSkgaW5kZXggPSB0aGlzLmxlbmd0aCAtIDE7XG4gICAgdmFyIHZtID0gdGhpcy5fZWxlbWVudC5wYXJlbnRWaWV3LnZpZXdNYW5hZ2VyO1xuICAgIHJldHVybiB2bS5kZXRhY2hWaWV3SW5Db250YWluZXIodGhpcy5fZWxlbWVudC5yZWYsIGluZGV4KTtcbiAgfVxufVxuIl19